import axios from "axios";
import { IResponseDto } from "../../../common/types";
import { Characters } from "./index.type";
import { useAppDispatch } from "../../../hooks";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { setCharacter } from "..";
import { toast } from "react-toastify";

const fetchAllCharacter = async (): Promise<IResponseDto<Characters[]>> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/character`);
  return response.data;
};

export const useAllCharacter = () => {
  const dispatch = useAppDispatch();

  const resp: UseQueryResult<IResponseDto<Characters[]>, Error> = useQuery<
    IResponseDto<Characters[]>,
    Error
  >({
    queryKey: ["character"],
    queryFn: fetchAllCharacter,
    staleTime: 60000,
    refetchIntervalInBackground: true,
  });
  if (resp.isSuccess) {
    dispatch(setCharacter(resp.data.results));
    toast.success("Query success");
  }
  return resp;
};

const fetchCharacterById = async (id: number): Promise<Characters> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/character/${id}`
  );
  return response.data;
};

export const useCharacterById = (id: number) => {
  const resp: UseQueryResult<Characters, Error> = useQuery<Characters>({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(id),
    staleTime: 60000,
    refetchIntervalInBackground: true,
  });

  return resp;
};
