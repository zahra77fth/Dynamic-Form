import React from 'react';
import { Control, useController } from 'react-hook-form';

interface TextInputProps {
    label: string;
    name: string;
    control: Control<any>;
    rules?: object;
    type?: string;
    textarea?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, control, rules, type = 'text', textarea = false }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <div className="relative mb-6">
            <label htmlFor={name} className="absolute -top-2 left-3 bg-white px-1 text-blue-600 text-sm">
                {label}
            </label>
            {textarea ? (
                <textarea
                    id={name}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    rows={3}
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-800 
                        ${error ? 'border-red-500' : 'border-blue-600 focus:border-blue-700'}`}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    value={value || ''}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-800 
                        ${error ? 'border-red-500' : 'border-blue-600 focus:border-blue-700'}`}
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default TextInput;
