
const CountryCards= () =>{
    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px',height:'200px',width:'200px',borderRadius:'10px',border:'1px solid gray'}}>
        <img src={"https://flagcdn.com/w320/af.png"} alt={"flag of afganistan"} />
            <h2>Afganistan</h2>
        </div>
    );
};

export default function countries() {
            const temp=[1,2,3,4,5,6,7,8,9,10];
    return <div>{temp.map(i=>(<CountryCards />))}</div>;
}