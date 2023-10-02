import ServiceCard from "../Customs/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {
        services.map(service => (
        <ServiceCard key={service.title} {...service} />
        ))
      }
    </section>
  )
}

export default Services