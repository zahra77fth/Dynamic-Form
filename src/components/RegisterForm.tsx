import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldErrors, FieldValues } from 'react-hook-form';
import Experiences from './Experiences';
import TextInput from './TextInput';

interface Experience {
    nameOfCompany: string;
    startDate: Date;
    endDate: Date;
    roll: string;
    description: string;
}

interface FormData extends FieldValues {
    name: string;
    lastName: string;
    age: number;
    roll: string;
    experiences: Experience[];
}

const RegisterForm = () => {
    const [experienceCounter, setExperienceCounter] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                <TextInput
                    label="Name"
                    id="name"
                    register={register}
                    errors={errors}
                    validation={{ required: 'Name is required' }}
                />
                <TextInput
                    label="Last Name"
                    id="lastName"
                    register={register}
                    errors={errors}
                    validation={{ required: 'Last Name is required' }}
                />
                <TextInput
                    label="Age"
                    id="age"
                    type="number"
                    register={register}
                    errors={errors}
                    validation={{
                        required: 'Age is required',
                        min: { value: 0, message: 'Age must be a positive number' }
                    }}
                />
                <TextInput
                    label="Roll"
                    id="roll"
                    register={register}
                    errors={errors}
                    validation={{ required: 'Roll is required' }}
                />
                <Experiences register={register} errors={errors} experienceCounter={experienceCounter} />
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
