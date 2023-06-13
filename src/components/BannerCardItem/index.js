import './index.css'

const BannersSection = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
  return (
    <li className="list-type" className={className}>
      <div className="card-1">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}
export default BannersSection
