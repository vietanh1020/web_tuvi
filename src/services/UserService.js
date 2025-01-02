/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';

const endPoint = `/user`;

export const useGetAllUser = () => {
    return useQuery([endPoint], async () => {
        const res = await axiosInstance.get(endPoint);
        return res.data;
    });
};

export const useCreateUser = () => {
    return useMutation(
        [endPoint],
        async (data) => {
            const res = await axiosInstance.post(endPoint, data);
            return res.data;
        },
        {
            onError: async (err) => {},
        },
    );
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation(
        [endPoint],
        async (req) => {
            const { id, data } = req;
            const res = await axiosInstance.put(`${endPoint}/${id}`, {
                ...data,
            });
            return res.data;
        },
        {
            onSuccess: async () => {
                toast.success('Update user Success');
                queryClient.invalidateQueries([endPoint]);
            },
            onError: async (err) => {
                toast.error(err.response.data.message);
            },
        },
    );
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation(
        [endPoint],
        async (id) => {
            const res = await axiosInstance.delete(`${endPoint}/${id}`);
            return res.data;
        },
        {
            onSuccess: async () => {
                toast.success('Deleted user Success');
                queryClient.invalidateQueries([endPoint]);
            },
            onError: async () => {
                toast.error('Deleted user Failed');
            },
        },
    );
};
