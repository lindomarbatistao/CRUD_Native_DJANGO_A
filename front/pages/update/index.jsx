import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';

export default function UPDATE() {

    // ############# GET ########################
    const [userId, setUserId] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [pass, setPassword] = useState('')

    const get = () => {
        axios.get('http://127.0.0.1:8000/api/usuario/' + userId)
            .then((response) => {
                setUsuario(response.data.nome)
                setRua(response.data.rua)
                setBairro(response.data.bairro)
                setCidade(response.data.cidade)
                setUF(response.data.uf)
                setCep(response.data.cep)
                setEmail(response.data.email)
                setNum(response.data.numero)
            })
    }
    const update = () => {
        axios.put('http://127.0.0.1:8000/api/usuario/'+userId, {
            'nome': usuario,
            'rua': rua,
            'bairro': bairro,
            'cidade': cidade,
            'uf': uf,
            'cep': cep,
            'email': email,
            'numero': num
        }).then((response) => {
            console.log(response)
            setBairro('')
            setCep('')
            setCidade('')
            setEmail('')
            setNum('')
            setPassword('')
            setRua('')
            setUF('')
            setUserId('')
            setUsuario('')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>UPDATE</Text>
            <Text style={styles.texto2}>ID:</Text>
            <TextInput
                style={styles.ID}
                onChangeText={(e) => setUserId(e)}
            />

            <View>
                <Pressable
                    style={styles.btn}
                    onPress={get}
                >
                    <Text style={{ fontWeight: 'bold' }}>GET</Text>
                </Pressable>
            </View>
            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome:</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <View style={styles.cx}>
                    <Text style={styles.texto2}>Cep:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCep}
                        onChangeText={setCep}
                        value={cep}
                    />

                </View>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Rua:</Text>
                    <Text style={styles.textoUf2}>      Nº</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.texto}
                        onChangeText={setRua}
                        value={rua}
                    />
                    <TextInput
                        style={styles.textoNum}
                        onChangeText={setNum}
                        value={num}
                    />
                </View>
                <Text style={styles.texto2}>Bairro:</Text>
                <TextInput
                    style={styles.texto}
                    onChangeText={setBairro}
                    value={bairro}
                />
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Cidade:</Text>
                    <Text style={styles.textoUf2}>UF:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCidade}
                        onChangeText={setCidade}
                        value={cidade}
                    />
                    <TextInput
                        style={styles.textoUf}
                        onChangeText={setUF}
                        value={uf}
                    />
                </View>
                <Text style={styles.texto2}>Email:</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setEmail}
                    value={email}
                />


                <Text style={styles.texto2}>Senha:</Text>
                <TextInput
                    style={styles.addNew}
                    onChangeText={(e) => setPassword(e)}
                    value={pass}
                    secureTextEntry={true}
                />

                <View style={{alignItems:'center'}}>
                    <Pressable
                        style={styles.btn}
                        onPress={update}
                    >
                        <Text style={{ fontWeight: 'bold', color:'white' }}>PUT</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


