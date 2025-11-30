import { useParams } from 'react-router-dom';

export function useIDRota(){
    const {id} = useParams()
    return id
}