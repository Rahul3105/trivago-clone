import { WrapperMap } from './Map';
const MapComponent = () => {
    console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY)
    return (
        <>
            <div style={{width:'100vw', height:'100vh'}}>
                <WrapperMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
                    loadingElement={<div style={{ height: '100vh' }} />}
                    mapElement={<div style={{ height: '100vh' }} />}
                    containerElement={<div style={{ height: '100vh' }}/>}

                />
            </div>
        </>
        
    )
}
export {MapComponent}