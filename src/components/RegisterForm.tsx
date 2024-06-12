import React, { useState } from 'react';
import { useForm, SubmitHandler, Control } from 'react-hook-form';
import Experiences from './Experiences';
import TextInput from './TextInput';

interface Experience {
    nameOfCompany: string;
    startDate: Date;
    endDate: Date;
    roll: string;
    description: string;
}

interface FormData {
    name: string;
    lastName: string;
    age: number;
    roll: string;
    experiences: Experience[];
}

const RegisterForm = () => {
    const [experienceCounter, setExperienceCounter] = useState(0);
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                <TextInput
                    label="Name"
                    name="name"
                    control={control}
                    rules={{ required: 'Name is required' }}
                />
                <TextInput
                    label="Last Name"
                    name="lastName"
                    control={control}
                    rules={{ required: 'Last Name is required' }}
                />
                <TextInput
                    label="Age"
                    name="age"
                    type="number"
                    control={control}
                    rules={{
                        required: 'Age is required',
                        min: { value: 18, message: 'You must be at least 18 years old' }
                    }}
                />
                <TextInput
                    label="Roll"
                    name="roll"
                    control={control}
                    rules={{ required: 'Roll is required' }}
                />
                <Experiences control={control} errors={errors} experienceCounter={experienceCounter} />
                <button
                    type="button"
                    onClick={() => setExperienceCounter(experienceCounter + 1)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Add Experience
                </button>
                <button
                    type="submit"
                    className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;