import React, { useState } from 'react';
import {SubmitHandler, useForm} from 'react-hook-form'

interface experience {
    nameOfCompany: String,
    startDate: Date,
    endDate: Date,
    roll: String,
    description: String
}

interface formData {
    name: String,
    lastName: String,
    age: number,
    roll: String,
    experiences: Array<experience>
}
const RegisterForm = () => {
    const [experienceCounter, setExperienceCounter] = useState(0)
    const { register, handleSubmit } = useForm<formData>()

    const onSubmit: SubmitHandler<formData> = (data) => {
        console.log(data)
    }
    for (let i = 0 ; i < experienceCounter ; i++) {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center h-screen">
            <div className="w-64 border border-gray-300 p-4 rounded">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>

                <div>
                    <label htmlFor="name">LastName:</label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div>
                    <label htmlFor="number">Age:</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>

                <div>
                    <label htmlFor="occupation">Roll:</label>
                    <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>

                <div>
                    <label htmlFor="projectDetails">Project Details:</label>
                    <textarea
                        id="projectDetails"
                        name="projectDetails"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default RegisterForm;