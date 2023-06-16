
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../baseUrl/baseUrl";
const useAddClass = () => {
    const { refetch, data: allTask = [], isLoading } = useQuery({
        queryKey: ["allTask"],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/alltasks`);
            return res.json();
        },
    });

    return [allTask, refetch, isLoading];
};

export default useAddClass;
