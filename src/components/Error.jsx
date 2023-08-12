export const Error = ({errores}) => {
    return (
        <div className="bg-red-400 text-white text-center mb-8 font-bold p-3 uppercase">
            {
                errores.map( (errores, i) => <p key={i}>{errores}</p> )
            }
        </div>
    )
}
