import React, { useState } from 'react'

const MessageForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch("http://127.0.0.1:8000/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }),
            });

            const data = await response.json();
            console.log(data);
            
            alert('Thank you for your message! I\'ll get back to you soon.')
            setFormData({ name: '', email: '', subject: '', message: '' })
            
        } catch (error) {
            console.error("Error:", error);
            alert('There was an error sending your message. Please try again.')
        }
    }

    return (
        <div className='w-full max-w-md lg:max-w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-6 w-full'>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                    <div className='flex flex-col w-full'>
                        <label className='text-gray-100 mb-2 text-sm sm:text-base'>Name</label>
                        <input 
                            name='name'
                            value={formData.name}
                            placeholder='Your Name'
                            onChange={handleChange}
                            type='text'
                            className='w-full h-12 bg-gray-700 text-white rounded-lg px-4 border border-gray-600 focus:border-purple-500 focus:outline-none text-sm sm:text-base'
                            required
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='text-gray-100 mb-2 text-sm sm:text-base'>Email</label>
                        <input 
                            name='email'
                            value={formData.email}
                            placeholder='your.email@example.com'
                            onChange={handleChange}
                            type='email'
                            className='w-full h-12 bg-gray-700 text-white rounded-lg px-4 border border-gray-600 focus:border-purple-500 focus:outline-none text-sm sm:text-base'
                            required
                        />
                    </div>
                </div>
                
                <div className='flex flex-col'>
                    <label className='text-gray-100 mb-2 text-sm sm:text-base'>Subject</label>
                    <input 
                        name='subject'
                        value={formData.subject}
                        placeholder='Subject of your message'
                        onChange={handleChange}
                        type='text'
                        className='w-full h-12 bg-gray-700 text-white rounded-lg px-4 border border-gray-600 focus:border-purple-500 focus:outline-none text-sm sm:text-base'
                        required
                    />
                </div>

                <div className='flex flex-col'>
                    <label className='text-gray-100 mb-2 text-sm sm:text-base'>Message</label>
                    <textarea 
                        name='message'
                        value={formData.message}
                        placeholder='Your message here...'
                        onChange={handleChange}
                        rows={4}
                        className='w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-500 focus:outline-none resize-none text-sm sm:text-base'
                        required
                    />
                </div>
                
                <button 
                    type='submit'
                    className='w-full h-12 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm sm:text-base mt-2'
                >
                    Send message
                </button>
            </form>
        </div>
    )
}

export default MessageForm