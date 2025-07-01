import {
	FontAwesomeIcon as _FontAwesomeIcon,
	FontAwesomeIconProps as _FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export interface FontAwesomeIconProps {
	svg?: SvgIconProps;
	icon: _FontAwesomeIconProps['icon'];
}

const FontAwesomeIcon = (props: FontAwesomeIconProps) => {
	return (
		<SvgIcon {...props.svg}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 20'
				preserveAspectRatio='xMidYMid meet'
			>
				<_FontAwesomeIcon icon={props.icon} />
			</svg>
		</SvgIcon>
	);
};

export default FontAwesomeIcon;
