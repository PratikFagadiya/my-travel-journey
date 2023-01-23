import '../css/VisitListItem.css'
import LocationIcon from '../imgs/Fill 219.svg'

export default function VisitListItem({title, country, placeLink, img, startDate, endDate, description}) {
    return (<div className={'parent_visit_item_card'}>

            <div className={'visit_item'}>

                <img className={'img'} height={'235px'} width={'180px'} src={img} alt={'Place Image'}/>
                <div className={'content'}>

                    <section className={'section_location'}>
                        <img className={'place_img'} src={LocationIcon} width={'15px'} height={'15px'} alt={'location'}/>
                        <span className={'place_location'}>{country}</span>

                        <a className={'place_location_link'}
                           href={placeLink}>
                            <span>View On Google Map</span>
                        </a>

                    </section>

                    <span className={'place_name'}>{title}</span>
                    <span className={'place_visit_date'}>{startDate} {endDate}</span>
                    <span className={'place_description'}>{description}</span>

                </div>

            </div>

        </div>

    )
}