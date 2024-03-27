import { View, Text, Image, TouchableOpacity } from 'react-native';

import { customHeaderStyle as style } from './style';

const CustomHeader = ({
    title,
    leftIcon,
    rightIcon,
    backgroundImage,
    rightActionCalled,
    leftActionCalled
}) => {
    return (
        <View style={style.headerContainer}>
            <Image
                source={backgroundImage}
                style={style.backgroundImage}
                resizeMode="cover"
            />
            <View style={style.innerContainer}>
                <TouchableOpacity onPress={leftActionCalled}>
                    <Image source={leftIcon} style={style.leftIcon} />
                </TouchableOpacity>
                <Text style={style.title}>{title}</Text>
                <TouchableOpacity
                    style={style.rightIcon}
                    onPress={rightActionCalled}>
                    <Image source={rightIcon} style={style.rightIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomHeader;
