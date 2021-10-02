import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const BlogPostForm = ({onSubmit,initialValues})=>{
    const [title,setTitle] = useState(initialValues.title)
    const [content,setContent] = useState(initialValues.content)

    return(<View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        <TouchableOpacity style={styles.button} onPress={() => onSubmit(title,content)}>
            <Text style={styles.appButtonText}>SAVE BLOG POST</Text>
        </TouchableOpacity>
    </View>)
};  

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        height:'auto',
        borderColor:'black',
        margin:7,
        padding:5
    },
    label:{
        fontSize: 25,
        marginBottom:10,
        marginLeft:5
    },
       
    button:{
        elevation: 8,
        alignSelf:'center',
        backgroundColor: "#009688",
        opacity:0.65,
        borderRadius: 10,
        padding:10
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default BlogPostForm
