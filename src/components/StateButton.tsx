import Button, { ButtonProps } from '@mui/material/Button';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';

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
	activeColor = 'secondary.main',
	label,
	icon,
	slotProps,
}: StateButtonProps) => {
	return (
		<Button
			variant='contained'
			{...slotProps?.button}
			sx={{
				bgcolor: active ? activeColor : null,
				...slotProps?.button?.sx,
			}}
		>
			<Stack
				direction={orientation === 'vertical' ? 'column' : 'row'}
				spacing={orientation === 'vertical' ? 0.5 : 2}
				alignItems='center'
				justifyContent='center'
				sx={{ py: 2 }}
				{...slotProps?.stack}
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
						>
							{text}
						</Typography>
					))}
			</Stack>
		</Button>
	);
};

export default StateButton;
