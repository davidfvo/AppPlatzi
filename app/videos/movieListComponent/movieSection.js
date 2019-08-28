import React, { Component } from 'react';
import { FlatList, View, Text, Button, TextInput} from 'react-native';
import { movieList, moviTest, movieSearch } from '../components/api';
import { Empty } from '../components/emptyView';
import ItemSeparator from '../components/ItemSeparator';
import RenderItem from './renderItem';
import { Layout } from '../components/suggestion-layout';
import { source } from '../../api/source';
import { LoaderComponent } from '../components/loading';
import { connect } from 'react-redux';
import { store } from '../../store';
import HomeMovie from '../../index';
import NavigationService from '../../NavigationService'

function mapStateToProps(state) {
    return {
        list: state.suggestionList
    }
}

export class MovieSection extends Component {

    constructor() {
        super()
        this.state = {
            test: [],
            cedulaActiva: "08500043545",
            tipoDocumentoActivo: "Cedula"
        }
    }

    _renderItem = ({ item }) => {
        return (
            <RenderItem {...item}
                size={120}
                vertical
                onDetail={this.props.onDetail}
            />
        )
    }
    _itemSeparator = () => {
        return (
            <ItemSeparator horizontal />
        )
    }

    _emptyList = () => {
        return (
            <Empty
                title='This list is empty'
            />
        )
    }
    _movieList = async () => {
        try {
            const suggestionList = await movieList();
            store.dispatch({
                type: 'SET_SEGGESTION_LIST',
                payload: {
                    suggestionList
                }
            })
            /* const test = await moviTest()
            this.setState({ test: test }) */
        } catch (err) {
            console.warn( "Error en MovieSection Service: " + err)
        }
    }

    /* _consoleLog = () => {
        console.log(this.state.test)
    }
      _aliadeCode = async () => {
        const test = await moviTest(this.state.cedulaActiva, this.state.tipoDocumentoActivo)
        this.setState({ test: test })
        console.log(this.state.test)
    }

    _getHandler = key => val => {
        this.setState({ [key]: val })
    } */

    _loading = () => {
        return (
            <LoaderComponent color={"green"} />
        )
    }
    componentWillMount() {
        this._movieList()
    }
    componentWillUnmount() {
        this._movieList()
    }

    render() {
        return (
            <Layout title='Recomended for you'
                backGround={source.backGroundVideo}>
                {/* <TextInput 
                    value={this.state.cedulaActiva} 
                    onChangeText={this._getHandler('cedulaActiva')}
                    keyboardType={"numeric"} 
                    style={{color: "white" , backgroundColor: "green"}}
                    placeholder="Cédula"
                /> */}
                {/* <Button title="CodigoAliado" onPress={async () => this._aliadeCode()} /> */}
                <FlatList
                    data={this.props.list}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._itemSeparator}
                    ListEmptyComponent={this._loading}
                    initialNumToRender={16}
                    numColumns={3}
                />
            </Layout>
        )
    }
}
export default connect(mapStateToProps)(MovieSection)