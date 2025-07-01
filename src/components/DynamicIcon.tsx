import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Icon, { IconProps } from '@mui/material/Icon';

export interface DynamicIconProps {
	icon: string;
	iconProps?: IconProps;
	svgIconProps?: SvgIconProps;
	fontAwesomeProps?: Omit<FontAwesomeIconProps, 'icon'>;
}

const DynamicIcon = (props: DynamicIconProps) => {
	if (props.icon?.startsWith?.('fa')) {
		return (
			<FontAwesomeIcon
				icon={
					`fa-duotone ${props.icon}` as FontAwesomeIconProps['icon']
				}
				{...props.fontAwesomeProps}
			/>
		);
	}

	return (
		<div>
			<Icon {...props.iconProps} baseClassName='material-icons-two-tone'>
				{props.icon.replaceAll(' ', '_').replaceAll('-', '_')}
			</Icon>
		</div>
	);
};

export default DynamicIcon;
