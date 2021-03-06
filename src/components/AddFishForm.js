import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        this.props.addFish(fish);
        // refresh the form
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish.bind(this)}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"></input>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"></input>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image"></input>
                <button type="submit">+ Add fish</button>
            </form >
        )
    }
}

export default AddFishForm;