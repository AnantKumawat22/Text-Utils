export default function Theme(props) {

  console.log(props.theme);
  return (
    <>
        <div className="container-fluid h-50 pt-1 pb-1 d-flex flex-row-reverse">
            <button type="button" onClick={props.toggletheme} className={`btn btn-${props.theme === 'light' ? 'dark' : 'light'} btn-circle btn-xl`} style={{borderRadius: '100%', width: '30px', height: '30px'}}></button>
        </div>
    </>
  )
}
