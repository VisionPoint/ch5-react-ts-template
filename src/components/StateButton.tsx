import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { darken, lighten } from '@mui/material/styles';

interface StateButtonProps {
	orientation?: 'horizontal' | 'vertical';
	active?: boolean;
	activeColor?: string;
	label?: string[];
	icon?: React.ReactNode;
	slotProps?: {
		button?: ButtonProps;
		stack?: StackProps;
		typography?: TypographyProps;
	};
}

const StateButton = ({
	orientation = 'vertical',
	active,
	activeColor,
	label,
	icon,
	slotProps,
}: StateButtonProps) => {
	const ref = React.useRef<HTMLButtonElement>(null);
	const [bgcolor, setBgColor] = React.useState<string | null>(
		slotProps?.button?.sx?.bgcolor || null
	);

	React.useEffect(() => {
		if (ref.current) {
			const computedStyle = window.getComputedStyle(ref.current);
			const backgroundColor = computedStyle.backgroundColor;

			if (active) {
				setBgColor(activeColor || darken(backgroundColor, 0.33)); // Default to primary color if active
			} else {
				setBgColor(slotProps?.button?.sx?.bgcolor || null);
			}
		}
	}, [active, activeColor, slotProps?.button?.sx?.bgcolor]);

	return (
		<Button
			variant='contained'
			{...slotProps?.button}
			sx={{
				bgcolor,
				color: active ? 'text.primary' : null,
				// boxShadow: (theme) =>
				// 	active
				// 		? `0px 0px 1px 1px ${theme.palette.primary.light}`
				// 		: 'none',
				...slotProps?.button?.sx,
			}}
			ref={ref}
		>
			<Stack
				direction={orientation === 'vertical' ? 'column' : 'row'}
				spacing={orientation === 'vertical' ? 0.5 : 2}
				alignItems='center'
				justifyContent={
					orientation === 'vertical' ? 'space-around' : 'center'
				}
				{...slotProps?.stack}
				sx={{
					height: orientation === 'vertical' ? '100%' : null,
					py: orientation === 'vertical' ? 0 : 2,
					...slotProps?.stack?.sx,
				}}
			>
				{icon}

				{label &&
					Array.isArray(label) &&
					label.map((text, index) => (
						<Typography
							component='div'
							fontSize={26}
							{...slotProps?.typography}
							key={index}
							color='inherit'
						>
							{text}
						</Typography>
					))}
			</Stack>
		</Button>
	);
};

export default StateButton;
