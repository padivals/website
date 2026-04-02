import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HalfHeroSection from "@/components/sections/HalfHeroSection";
import Typography from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Padival Grand Hotel",
  description:
    "Read The Padival Grand Hotel's Terms and Conditions to understand the policies governing your use of our website.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
      <Header />

      <HalfHeroSection title="Terms Of Service" />

      {/* Content Section */}
      <section className="bg-[#F9F2E8] py-16 md:px-16 px-4 padding-left md:py-20 ">
        <div className="w-full max-w-8xl mx-auto ">
          <div className="space-y-10 sm:space-y-12">

            {/* TERMS OF QUOTATION */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Terms Of Quotation
              </Typography>
              <div className="space-y-4">
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  The price for services shall be the price stated on the quotation/estimate. The quotation is valid only for one week only from the date of transmittal of the quotation to client. Any type of changes, additions or modifications in menu or number of guests, etc. must be intimated at least 3 working days prior to the event date.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  Mahaveer Ventures reserves the right to reject any order/counter offer. Our service depends on availability of event date, number of guest and event location. The company reserves the right to revise catering quotes on changes to event.
                </Typography>
              </div>
            </div>

            {/* CONFIRMATION OF BOOKING */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Confirmation Of Booking
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                The service user/clients’ confirmation means the s/he OR they have accepted these terms and conditions and the quotation. Once the clients deposit has been received a receipt will be issued by Mahaveer Ventures which will include your draft menu with selections made by the client at this time.
              </Typography>
            </div>

            {/* TERMS OF PAYMENT */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Terms Of Payment
              </Typography>
              <div className="space-y-4">
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  A payment of 50% deposit is required at the time of booking or one week before the day of the event whichever is earlier. Remaining balance a payment of 40% due must be paid one day prior to the day of the event unless other arrangements are approved in advance with management. Remaining 10% balance paid after event completion.
                </Typography>
                <ul className="list-decimal list-inside text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed space-y-2 ml-1 sm:ml-2">
                  <li>
                    <span className="font-semibold">Cost:</span> due to the fluctuating cost of food items, menu prices are subject to change when a drastic change in the menu ingredient cost occurs, client has two options.
                    <ul className="list-[lower-alpha] list-inside ml-4 mt-1 space-y-1">
                      <li>Client will pay the additional cost based on the current adjusted price, or</li>
                      <li>Substitute other menu items to maintain the agreed upon per person/platter menu.</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Payment method:</span> all prices quoted are based on cash payments only. No personal and cashable cheques are accepted. However, cheque payments are subject to accept, but due to bank clerical clearance all cheques are accepted seven 7 working days before the event date.
                  </li>
                </ul>
              </div>
            </div>

            {/* EVENT DAY SUBJECTIVITIES */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Event Day Subjectivities
              </Typography>
              <div className="space-y-4">
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  Caterer reserves the right to make small changes to the menu only if ingredients are unable to be source due to reasons beyond the control of both the parties
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  All prices are quoted for a specific number of guests. When numbers drop, our overheads do not reduce proportionally and therefore our menu prices increase. We require confirmation of numbers to be catered if increase the guest list before three days of an event.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  After this date, increase in numbers of up to 10 to 20 people can usually be accommodated but no allowances can be made if numbers drop. If the number of guests attending exceeds the numbers booked (and we are able to cater for them) we will charge for the greater number.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  If the number of guests attending is less than the number booked, plus we are left uninformed about it three days prior to the event, we will still charge the total number ordered you originally placed.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  Client agrees to pay any for any and all additional services requested by the client not included in contract. Any additional service requested shall be made by the client in writing.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  Prior approval from caterer is required for any storage service before or after the event/function
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  We need to be intimated at least 10 days prior of any changes in the event date/venue
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  Client will be billed for additional hours for any time extension unless mutually agreed upon with the Management prior to the event
                </Typography>
              </div>
            </div>

            {/* FORCE MAJEURE */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Force Majeure
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                Caterers shall not be any liable for losses resulting from nonfulfillment of any terms of provisions of event contract, if caterer shall be prevented or delayed from performing in whole or in part because of riots, strikes, and flood or by any other act occurrence not within the reasonable control of caterer, which it could not prevent.
              </Typography>
            </div>

            {/* PRICES */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Prices
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                Prices stated are subject to change according to the market price of products and with final guaranteed number of guests. Caterer will inform client of market price changes no later than 10 days prior to the event. Client will have the option of revising products and service to reduce costs prior to payment as described in payment term. Upon payment the final price is fixed and may only change due to a change in number of guests or mutually agreed upon changes in the services and/or menu provided.
              </Typography>
            </div>

            {/* FOOD POLICY */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Food Policy
              </Typography>
              <div className="space-y-4">
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  <span className="font-semibold">Quantity:</span> caterer will prepare between five -ten percent overage based on the final number of guest count registered by client. Part of this overage is to include food for the staff and/or service providers. Client will not be charged for this.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  <span className="font-semibold">Leftovers:</span> It is not our policy to leave leftover food as it is never the same the following day. If, however, you wish to keep the food you must ask our Catering Head on the site. S/He will then arrange for transfer of any left overs to your own dishes once the service staff have been fed. The caterers reserve the right to discard any leftover food.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  If you (client) or any of your guests request to take any of the remaining uneaten food items it means we are not responsible for any harm that could arise due to the delay in consumption/poor storage of the said food item.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  We are not responsible for a case if risen of insufficient food if any service staff from outside our team participates in the serving errand. No remunerations/compensations of any kind will be offered for the said outsider.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  We accept no liability for any food supplied to the client by another caterer (or food products suppliers by the client themselves) in additional to those arranged by us.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  <span className="font-semibold">Dietary requirements and allergies:</span> We will try hard to provide suitable adaptions to the clients’ menu for any guests with special dietary requirements or allergies. We cannot however take responsibility for any guests unless advised in advance. Charges may vary.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  <span className="font-semibold">Alcoholic beverages:</span> We will never supply any form of alcoholic beverages for any kind of event.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  <span className="font-semibold">Non-Veg food:</span> We need to be informed prior to the programme of any non-veg. food being served at the same time and venue. We will not permit the usage of our plates to accommodate non-veg. food. However, alternate arrangements will and can be made if we are informed prior to the date of the function.
                </Typography>
              </div>
            </div>

            {/* CLIENTS’ RESPONSIBILITY */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Clients’ Responsibility
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                The caterer is not responsible for any items provided by client to the event (i.e. beverages, flowers, cake, gifts, additional foods, dishes, glassware, serving pieces, etc.) The caterer is only responsible for those items listed on invoice as provided by caterer and no other items. It is understood that the client will conduct the event in an orderly manner, and in full compliance with all applicable laws, ordinances and regulations, and facility contract.
              </Typography>
            </div>

            {/* DAMAGES */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Damages
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                Caterer assumes no responsibility for any damage or loss of merchandise, alcohol, equipment, furniture, clothing or other valuables prior to, during or after the event. Caterer will do everything possible to ensure that all of client’s supplies, rentals and equipment are cared for and maintained in good working order and without damage. When providing the location for the event/function, the client, understands that accidents/breakage and/or damage may sometimes occur. Caterer will not be liable for any damage or loss, unless specifically caused and proved by the wilful negligent actions or conduct of caterer or its employees.
              </Typography>
            </div>

            {/* UNLAWFUL ACTIVITIES */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Unlawful Activities
              </Typography>
              <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                The client will comply with all the laws of Dakshina Kannada, Karnataka, all municipal ordinances and all lawful orders of police and fire departments, and will not do anything on the event/function premises in violation of any laws, ordinances, rules or orders. If unlawful activities should occur on the premises, and the event is cancelled, there will be no refund of any kind from caterer to client.
              </Typography>
            </div>

            {/* CANCELLATION */}
            <div>
              <Typography variant="title2" className="text-xl font-semibold sm:text-2xl md:text-3xl font-serif text-[#0F2A1D] mb-3 sm:mb-4">
                Cancellation
              </Typography>
              <div className="space-y-4">
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  If the client needs to cancel the event with any reason like client / venue / acts of God, client must provide written notice to caterer. Client understands that upon entering into the contract, caterer is committing time and resources to this event and thus cancellation would result in lost income and lost business opportunities in an amount hard to precisely calculate. Therefore, the following cancellation limitations will apply. If client requests cancellation of the contract will be charge it completely depend on the caterer’s accordance to days remaining to the event.
                </Typography>
                <Typography variant="description" className="text-[#4A5568] text-sm sm:text-base font-normal leading-relaxed">
                  If client cancellation event before 3 days in advance of the event date, caterer shall be entitled to 100 percent of the estimated total cost. The client’s deposit will be credited against the cancellation fees owed. Any balance will be payable upon the notice of cancellation.
                </Typography>
              </div>
            </div>

          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
