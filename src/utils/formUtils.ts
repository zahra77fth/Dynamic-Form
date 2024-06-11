import { FieldErrors } from 'react-hook-form';

export const getError = (errors: FieldErrors<any>, id: string) => {
    return errors[id];
};
