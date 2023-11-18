import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

const keyExtractor = item => item.id.toString();

export default class MessageList extends React.Component {

    renderMessageItem = ({ item }) => { const { onPressMessage } = this.props;
        return (
            <View key={item.id} style={styles.messageRow}>
            <TouchableOpacity onPress={() => onPressMessage (item)}> 
                {this.renderMessageBody (item)}
            </TouchableOpacity>
        </View> 
        );
    };

    renderMessageBody = ({ type, text, uri, coordinate}) => {
    switch (type) {
        case 'text': return (
        <View style={styles.messageBubble}>
            <Text style={styles.text}>{text}</Text>
        </View>
        );

        case 'image': 
        return (
            <Image style={styles.image} source= {{ uri }}/>
        );
        case 'location': return (
        <MapView
                style={styles.map} 
                initial Region={{
                ...coordinate,
                latitudeDelta: 0.08,
                longitudeDelta: 0.04,
                }}
                >
            <MapView.Marker coordinate={coordinate} />
        </MapView>
        );
        
        default:
            return null;
        };
    };
    
    renderMessageItem = ({ item }) => {
        
        switch (item.type) {
            case 'text':
                return (
                    <View style={styles.messageBubble}>
                        <Text style = {styles.text}>{item.text}</Text>
                    </View>
                );
            case 'image':
            return (
                <Image
                    source={item.image}
                    style={styles.image}
                />
            );
            case 'location':
                return (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: item.coordinate.latitude,
                            longitude: item.coordinate.longitude,
                            latitudeDelta: 0.0922, // example delta values
                            longitudeDelta: 0.0421, // example delta values
                        }}
                    />
                );
            default:
                return null;
        }
    }

    render() {
        const { messages } = this.props;
        return (
            <FlatList
                inverted
                style={styles.container}
                data={messages}
                renderItem={this.renderMessageItem}
                keyExtractor={keyExtractor}
                keyboardShouldPersistTaps={'handled'}
            />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'visible',
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Aligns messages to the right
        marginLeft: 60, // Leaves space on the left
        marginRight: 10,
    },
    messageBubble: {
        backgroundColor: '#007AFF', // Blue color for text message bubbles
        borderRadius: 15,
        padding: 10,
        maxWidth: '80%', // Ensures bubble doesn't stretch beyond 80% of the screen width
        alignSelf: 'flex-end', // Aligns the bubble to the right
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    image: {
        width: 200, 
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        margin: 10,
        alignSelf: 'flex-end'
    },
    map: {
        width: 250, // Fixed width for the map on the right
        height: Dimensions.get('window').width * 0.7,
        borderRadius: 10,
        margin: 10,
        alignSelf: 'flex-end', // Align map to the right
    }
});
