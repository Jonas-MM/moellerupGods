import React from 'react'
import Nyhedsbrevcss from './Nyhedsbrevcss.css'

const Nyhedsbrev = () => {
    return ( 
    
    <form className="text-left">
        <h4>Tilmed nyhedsbrev</h4>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
        <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">First name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
        <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Efternavn</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""></input>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Møllerup - alle</label>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Verdensballetten</label>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Møllerup Hamp</label>
        </div>
        <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
     );
}
 
export default Nyhedsbrev;