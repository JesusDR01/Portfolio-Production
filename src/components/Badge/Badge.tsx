import { StyledBadge } from "./Badge.styled";

export const Badge = ({
    data,
    variant,
}: {
    data: { name: string; img: string };
    variant: "primary" | "outlined";
}) => {
    return <StyledBadge className="badge" variant={variant}>{data.name}</StyledBadge>;
};
