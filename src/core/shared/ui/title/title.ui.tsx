import {ComponentProps, ElementType, FC, memo} from "react";
import { titleMap, TSize } from './variant-size.styles'
import cn from "@/core/shared/utils/cn";
import { useSize } from '@/core/shared/hooks/use-size.service';


interface ITitleProps extends ComponentProps<any> {
    className?: string;
    size?: TSize;
    as?: ElementType | null

}

const TitleUi: FC<ITitleProps> = ({
    className,
    size,
    children,
    as: Component = 'h2',
    ...otherProps
})=>{

    const currentSize = useSize({size, map: titleMap})
    const Tag = Component || 'h2'

    return (
        <Tag className={cn(currentSize?.className,' font-medium !text-white',className)} {...otherProps}>
            {children}
        </Tag>
    )
}
export default memo(TitleUi)