import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FilterNews extends Component {
    
   state = {
       category: ''
   }

   handleCategory = e => {
       //Podemos asignar un callback que se ejecute tras terminar de actualizar el state, otra forma puede ser ejecutar el metodo componentDidUpdate
        this.setState({
            category: e.target.value
        },() => {
            this.props.getNews(this.state.category);
        
    });
   }
        


    render() {
        return (
            <div className="buscador row">

                <div className="col s12 m8 offset-m2">
                    <form>

                        <h2>Encuentra noticias por categorías</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.handleCategory}>
                                <option value="general">General</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="business">Negocios</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sport">Deportes</option>
                                <option value="technology">Tecnologías</option>
                            </select>
                        </div>

                    </form>
                </div>
         
            </div>
        );
    }
}

FilterNews.propTypes = {
    getNews: PropTypes.func.isRequired
}
export default FilterNews;