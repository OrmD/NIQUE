import {ComponentProps, ElementType, FC, memo} from "react";
import { titleMap, TSize } from './variant-size.styles'
import cn from "@/core/shared/utils/cn";
import { useSize } from '@/core/shared/hooks/use-size.service';
import { useTranslations } from 'next-intl'


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

  const t = useTranslations("_.save_variant")
    const currentSize = useSize({size, map: titleMap})
    const Tag = Component || 'h2'

    return (
        <Tag className={cn(currentSize?.className,' font-medium !text-white text-center',className)} {...otherProps}>
            {children ? children : t("title")}
        </Tag>
    )
}
export default memo(TitleUi)