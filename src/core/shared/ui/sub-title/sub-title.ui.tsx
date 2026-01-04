import {ComponentProps, ElementType, FC, memo} from "react";
import { subTitleMap, TSize } from './variant-size.styles'
import cn from "@/core/shared/utils/cn";
import {useSize} from "@/core/shared/hooks/use-size.service";
import { useTranslations } from 'next-intl'


interface ISubTitleProps extends ComponentProps<any> {
    className?: string;
    size?: TSize;
    as?: ElementType | null

}

const SubTitleUi: FC<ISubTitleProps> = ({
    className,
    size,
    children,
    as: Component = 'h2',
    ...otherProps
})=>{

    const currentSize = useSize({size, map: subTitleMap})
  const t = useTranslations("_.save_variant")

    const Tag = Component || 'h1'

    return (
        <Tag className={cn('font-normal !text-primary text-center',currentSize.className, className)} {...otherProps}>
            {children? children: t("sub_title")}
        </Tag>
    )
}
export default memo(SubTitleUi)