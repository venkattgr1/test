import React, { useState } from 'react';
import jsPDF from 'jspdf';

const FormToPDF = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generatePDF();
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text(`Name: ${formData.name}`, 10, 10);
        doc.text(`Email: ${formData.email}`, 10, 20);
        doc.text(`Message: ${formData.message}`, 10, 30);

        // Save the PDF
        doc.save('form-data.pdf');
    };

    return (
        <div>
            <h1>Form to PDF</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Download PDF</button>
            </form>
        </div>
    );
};

export default FormToPDF;
