import {useMemo} from "react";
import { IVariantReturn } from '../types/hooks'

interface IUseVariantProps<S> {
    size?: S
    map: Map<S, IVariantReturn>
}

export const useSize = <S>({ size, map}: IUseVariantProps<S>): IVariantReturn => {
    return useMemo(() => {
        const value = size ? map.get(size) : undefined
        return value ?? Array.from(map.values())[0]
    }, [size, map])
}
