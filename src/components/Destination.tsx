import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIconProps } from './FontAwesomeIcon';

//import BlockIcon from '@mui/icons-material/Block';

export interface DestinationProps {
	disabled?: boolean;
	label?: string;
	source?: string;
	sourceIcon?: React.ReactElement<SvgIconProps | FontAwesomeIconProps>;
	minHeight?: number;
	minWidth?: number | string;
	color?: string;
	borderColor?: string;
	slotProps?: {
		button?: ButtonBaseProps;
	};
	showCheckbox?: boolean;
	checked?: boolean;
	onChecked?: (checked: boolean) => void;
}

const Destination = ({
	disabled,
	label,
	source,
	sourceIcon,
	minHeight,
	minWidth,
	color = 'text.secondary',
	borderColor = 'background.default',
	slotProps = {},
	showCheckbox,
	checked,
	onChecked,
}: DestinationProps) => {
	return (
		<Box
			sx={{
				pointerEvents: disabled ? 'none' : 'auto',
				//height: minHeight ? minHeight - 16 : '100%',
				//display: 'flex',
				//flexDirection: 'column',
				//flex: 'auto',
				opacity: disabled ? 0.5 : 1,
			}}
		>
			{label && (
				<Typography color={color} textAlign={'center'} sx={{ p: 1 }}>
					{label}
				</Typography>
			)}
			<Box
				sx={{
					border: 8,
					borderRadius: 1,
					borderColor: borderColor,
					//minHeight,
					minWidth,
					//display: 'flex',
					position: 'relative',
					//flex: 'auto',
					//height: '100%',
				}}
			>
				{showCheckbox && (
					<Checkbox
						checked={checked}
						onChange={(e) => onChecked?.(e.target.checked)}
						disabled={disabled}
						sx={{
							color,
							'&.Mui-checked': {
								color,
							},
							position: 'absolute',
							top: 0,
							left: 0,
							zIndex: 1,
						}}
					/>
				)}
				<ButtonBase
					{...slotProps.button}
					onClick={() => showCheckbox && onChecked?.(!checked)}
					sx={{
						//height: minHeight ? minHeight - 16 : '100%',
						width: '100%',
						...slotProps.button?.sx,
					}}
					disabled={disabled}
				>
					<Paper
						sx={{
							//flexGrow: 0,
							p: 1,
							//height: '100%',
							width: '100%',
						}}
						elevation={1}
						square
					>
						<Stack
							spacing={0}
							sx={{
								height: minHeight ? minHeight - 16 : '100%',
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{sourceIcon && (
								<Box sx={{ color, display: 'flex' }}>
									{React.cloneElement(sourceIcon, {
										fontSize: 'inherit',
										sx: { fontSize: 50 },
										svg: {
											sx: {
												height: 40,
												width: 40,
											},
										},
									})}
								</Box>
							)}
							<Typography
								variant='h6'
								color={color}
								//noWrap
								//sx={{ maxWidth: 178 }}
							>
								{source || 'No Source'}
							</Typography>
						</Stack>
					</Paper>
				</ButtonBase>
			</Box>
		</Box>
	);
};

export default Destination;
