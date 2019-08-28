import React,{ Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { source } from '../../api/source';
import { store } from '../../store';
import { getMovies, categoryReset , movieSearch , categorySearch} from '../components/api';
import { Empty } from '../components/emptyView';
import ItemSeparator from '../components/ItemSeparator';
import { LoaderComponent } from '../components/loading';
import { Layout } from '../components/suggestion-layout';
import RenderItem from './renderItem';


function mapStateToProps(state) {
    return {
        list: state.categoryList
    }
}

class CategorySection extends Component {
    _CategoryList = async () => {
        try {
            const categoryList = await getMovies()
            store.dispatch({
                type: 'SET_CATEGORY_LIST',
                payload: {
                    categoryList
                }
            })
        } catch (err) {
            console.warn("Error en CategoryFlatList Service: " + err)
        }
    }
    _renderItem = ({ item }) => {
        return (
            <RenderItem
                {...item}
                textSize={20}
                onPress={async () => {
                    try{
                        
                        const response = await categorySearch(item.genre)
                        const suggestionList = response.map((movie) => ({...movie, genre:item.genre}))
                        store.dispatch({
                            type: 'SET_SEGGESTION_LIST',
                            payload: {
                                suggestionList
                            }
                        })
                    }catch(err){
                        console.log("Error al buscar:" + err)
                    }
                }}
            />
        )
    }
    _emptyList = () => {
        return (
            <Empty
                title='This list is empty'
            />
        )
    }
    _itemSeparator = () => {
        return (
            <ItemSeparator vertical />
        )
    }
    _loader = () => {
        return (
            <LoaderComponent color={"black"} />
        )
    }
    componentWillMount() {
        this._CategoryList()
    }
    componentWillUnmount() {
        this._CategoryList()
    }
    /*
    constructor(){
        super()
        this.state = {
            loading: false,
        }
    }
    _isLoading = () => {
        
    }
    componentDidUpdate() {
        
    }*/
    render() {
        return (
            <Layout title="Category"
                backGround={source.backGroundCategory}>
                <FlatList
                    horizontal={true}
                    data={this.props.list}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._itemSeparator}
                    ListEmptyComponent={this._loader}
                    style={{
                        marginHorizontal: 5,
                        alignSelf: "center"
                    }}
                />
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(CategorySection)