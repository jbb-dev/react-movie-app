import React from 'react'
import './FormMovie.css'
import axios from 'axios'


class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            poster : '',
            comment : ''
        }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.postData = this.postData.bind(this)

    
    }

    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value,
            })
    }

    submitForm(e) {
        e.preventDefault()
    }

    postData() {

        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        
        axios.post(url, this.state )
        .then(res => res.data)
        .then(res => {
            alert(`Le film ${res.title} a été ajouté !`);
        })
        .catch(e => {
            console.error(e);
            alert(`Erreur lors de l'ajout du film : ${e.message}`);
        });
    }


    render() {
        return (

            <div class='FormEmployee'>

                <h1>Quel est ton film préféré ?</h1>

                <form onSubmit={this.submitForm} id="form">
                <fieldset>
                <legend>Informations</legend>

                    <div className="form-data">
                        <label htmlFor="title">Titre du film</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Ex: La cité de la peur"
                            onChange={this.onChange}
                            value={this.state.title}
                            required
                        />
                    </div>
      
                    <div className="form-data">
                        <label htmlFor="poster">Affiche du film</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                            placeholder="Saisir une url"
                            required
                        />
                    </div>
      
                    <div className="form-data">

                        <label htmlFor="comment">Commentaire</label>
                        <textarea
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.comment}
                            placeholder="Pourquoi tu aimes ce film ? qu'est-ce qui t'a marqué "
                            form='form'
                            required
                        />

                    </div>
            
                    <hr />

                    <div className="form-data">
                        <button type='submit' onClick={this.postData}>Envoyer</button>
                    </div>

                    </fieldset>
                 </form>
            </div>
        )
    }
}

export default FormMovie