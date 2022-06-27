import s from './Movies.module.css'

export default function Movies() {
  return (<div className="">
    <form 
    // onSubmit={}
    className={s.form}
    >
<label>
    <input type="input" />
</label>
<button 
type='submit'
className={s.btn}
>Search</button>
    </form>

  </div>);
}
