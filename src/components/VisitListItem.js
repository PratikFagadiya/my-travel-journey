import '../css/VisitListItem.css'
import LocationIcon from '../imgs/Fill 219.svg'

export default function VisitListItem() {

    return (

        <div className={'parent_visit_item_card'}>

            <div className={'visit_item'}>


                <img className={'img'} height={'235px'} width={'180px'}/>
                <div className={'content'}>

                    <section className={'section_location'}>
                        <img className={'place_img'} src={LocationIcon} width={'15px'} height={'15px'}/>
                        <span className={'place_location'}>JAPAN</span>

                        <a className={'place_location_link'}
                           href={"https://stackoverflow.com/users/12833551/pratik-fagadiya"}>
                            <span>View On Google Map</span>
                        </a>

                    </section>
                    <span className={'place_name'}>Mount Fouji</span>
                    <span className={'place_visit_date'}>12-10-2021 13-10-2022</span> {/*Apply Word spacing Here*/}
                    <span className={'place_description'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t</span>

                </div>

            </div>

        </div>

    )
}