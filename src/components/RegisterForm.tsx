import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
    phoneNumber: string;
    email: string;
    experiences: Experience[];
}

const RegisterForm = () => {
    const [experienceCounter, setExperienceCounter] = useState(0);
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Registration Form</h1>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <TextInput
                        label="First Name"
                        name="name"
                        control={control}
                        rules={{ required: 'First Name is required' }}
                        placeholder="e.g. Afagh"
                    />
                    <TextInput
                        label="Last Name"
                        name="lastName"
                        control={control}
                        rules={{ required: 'Last Name is required' }}
                        placeholder="e.g. Fattahi"
                    />
                </div>

                <TextInput
                    label="Age"
                    name="age"
                    type="number"
                    control={control}
                    rules={{
                        required: 'Age is required',
                        min: { value: 18, message: 'You must be at least 18 years old' }
                    }}
                    placeholder="e.g. 25"
                />

                <TextInput
                    label="Roll"
                    name="roll"
                    control={control}
                    rules={{ required: 'Roll is required' }}
                    placeholder="e.g. Developer"
                />

                <TextInput
                    label="Phone Number"
                    name="phoneNumber"
                    control={control}
                    rules={{ required: 'Phone Number is required' }}
                    placeholder="e.g. 123-456-7890"
                />

                <TextInput
                    label="Email"
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address'
                        }}}
                    placeholder="e.g. example@example.com"
                />

                <Experiences control={control} errors={errors} experienceCounter={experienceCounter} />

                <button
                    type="button"
                    onClick={() => setExperienceCounter(experienceCounter + 1)}
                    className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Add Experience
                </button>

                <button
                    type="submit"
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
