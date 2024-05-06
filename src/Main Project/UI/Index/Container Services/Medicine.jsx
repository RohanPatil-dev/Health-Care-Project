
import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Medicine() {
  return (
     <>
       {/* grid medicines  */}
    <div id="medicine">
        <div id="text">
            <p>Sometimes it seems like there are more medicines than there are diseases, and it can be hard to keep them
                straight. Some can be bought over the counter at pharmacies or other stores. Others require a doctor's
                prescription. Some are available only in hospitals.</p>

            <h2 className="text-danger">What Are Medicines?</h2>

            <p id="definition">Definition : Medicines are chemicals or compounds used to cure, halt, or prevent disease;
                ease symptoms; or help in the diagnosis of illnesses. Advances in medicines have enabled doctors to cure
                many diseases and save lives.</p>

            <p>These days, medicines come from a variety of sources. Many were developed from substances found in
                nature, and even today many are extracted from plants.</p>

            <p>Some medicines are made in labs by mixing together a number of chemicals. Others, like penicillin, are
                byproducts of organisms such as fungus. And a few are even biologically engineered by inserting genes
                into bacteria that make them produce the desired substance.</p>

            <p className="mt-5">When we think about taking medicines, we often think of pills. But medicines can be
                delivered in many ways, such as:</p>
            <ul id="points">
                <li>liquids that are swallowed.</li>

                <li>drops that are put into ears or eyes.</li>

                <li>creams, gels, or ointments that are rubbed onto the skin.</li>

                <li>inhalers (like nasal sprays or asthma inhalers).</li>

                <li>patches that are stuck to skin (called transdermal patches).</li>

                <li>tablets that are placed under the tongue (called sublingual medicines; the medicine is absorbed into
                    blood vessels and enters the bloodstream).
                </li>

                <li>injections (shots) or intravenous (inserted into a vein) medicines.</li>
            </ul>

            <p>No medicine can be sold unless it has first been approved by the Central Drugs Standard Control
                organisation (CDSCO). The makers of the medicine do tests on all new medicines and send the results to
                the CDSCO.</p>

            <p>The CDSCO allows new medicines to be used only if they work and if they are safe enough. When a
                medicine's benefits outweigh its known risks, the FDA usually approves the sale of the drug. The CDSCO
                can withdraw a medicine from the market at any time if it later is found to cause harmful side effects.
            </p>

            <h2 className="text-danger mt-5">Different Types of Medicines :
            </h2>

            <p>Medicines act in a variety of ways. Some can cure an illness by killing or halting the spread of invading
                germs, such as bacteria and viruses. Others are used to treat cancer by killing cells as they divide or
                preventing them from multiplying. Some drugs replace missing substances or correct low levels of natural
                body chemicals such as some hormones or vitamins. Medicines can even affect parts of the nervous system
                that control a body process.</p>
            <p>Nearly everyone has taken an antibiotic. This type of medicine fights bacterial infections. Your doctor
                may prescribe an antibiotic for things like <span className="text-info">strep throat or an ear
                    infection</span>. Antibiotics work either by killing bacteria or halting their multiplication so
                that the body's immune system can fight off the infection.</p>
            <p>Sometimes a part of the body can't make enough of a chemical. That can also make you sick. Someone with
                insulin-dependent diabetes, for instance, has a pancreas that can't produce enough <span
                    className="text-info">insulin</span> (a hormone that regulates glucose in the body). Some people have a
                low production of thyroid hormone, which helps control how the body uses energy. In each case, doctors
                can prescribe medicines to replace the missing hormone.</p>
            <p>Some medicines treat symptoms but can't cure the illness that causes the symptoms. (A symptom is anything
                you feel while you're sick, such as a cough or nausea.) So taking a lozenge may soothe a sore throat,
                but it won't kill that nasty strep bacteria.</p>
            <p>Some medicines relieve pain. If you pull a muscle, your doctor might tell you to take ibuprofen or
                acetaminophen. These <span className="text-info">pain relievers, or analgesics</span>, don't get rid of the
                source of the pain — your muscle will still be pulled. What they do is block the pathways that transmit
                pain signals from the injured or irritated body part to the brain (in other words, they affect the way
                the brain reads the pain signal) so that you don't hurt as much while your body recovers.</p>
            <p>As people get older, they sometimes develop chronic or long-term conditions. Medicines can help control
                things like <span className="text-info">high blood pressure (hypertension) or high cholesterol</span>. These
                drugs don't cure the underlying problem, but they can help prevent some of its body-damaging effects
                over time.</p>


            <p>Although some medicines require a prescription, some are available in stores. You can buy many medicines
                for pain, fever, cough, or allergies without a <span className="text-info">prescription</span>. But just
                because a medicine is available over-the-counter (OTC), that doesn't mean it's free of side effects.
                Take OTC medicines with the same caution as those prescribed by a doctor.</p>


            <h2 className="text-danger mt-5">Taking Medicines :</h2>
            <p>No matter what type of medicine your doctor prescribes, it's always important to be safe and follow some
                basic rules :</p>
            <ul id="points">
                <li>If you feel worse after taking a medicine, tell your doctor right away.</li>

                <li>Double-check that you have the right medicine. If you get the same prescription filled more than
                    once, check that it's the same shape, size, and color as the last time. If not, be sure to ask the
                    pharmacist about it.</li>

                <li>Read the label and follow directions. Ask if you have questions.</li>

                <li>Take medicines exactly as prescribed. If the instructions say take one tablet four times a day,
                    don't take two tablets twice a day. It's not the same.</li>

                <li>Ask if the medicine is likely to affect everyday tasks such as driving or concentrating in school.
                </li>

                <li>Don't take more medicine than is recommended. It won't make you heal faster or feel better quicker.
                    In fact, an overdose of medicine can make you sick.
                </li>

                <li>Always follow your doctor's or pharmacist's instructions. For instance, he or she may tell you to
                    take a medicine with food to help lessen the stomach upset it can cause or instead to take the
                    medicine on an empty stomach so as not to interfere with the medicine's absorption into your body.
                </li>

                <li>Never share prescription medicine with anyone else, even if that person has the same thing as you
                    do. Today's medicines are very complex, and the dosages tend to be precisely prescribed for each
                    person's needs. Either under-dosing or overdosing can be harmful. Additionally, someone else's body
                    may react differently to the same medicine (for example, if the person has an allergy to one of the
                    components of the medicine).</li>

                <li>If you're already taking a medicine but also want to take something you can buy over-the-counter,
                    ask the pharmacist. There could be a bad interaction between the medicines.</li>

                <li>Remember that drinking alcohol can dramatically worsen the side effects of many medicines. </li>
                <li>Even if you get sick with what you think is the same old thing, don't decide on your own that you
                    know what's wrong and take some leftover medicine. Taking that medicine for a different disease
                    might not work — and it can even be harmful. Talk to your doctor first.</li>
                <li>Take antibiotics for the full length of the time prescribed, even if you start to be feel better, so
                    that all the germs are killed and the infection doesn't bounce back.</li>
                <li>Keep medicines in their original labeled containers, if possible.</li>
                <li>Don't use medicine that has expired, especially prescription medicine.</li>
                <li>Medicines should not be stored in your bathroom because heat and humidity can affect the potency of
                    the drug. Most medicines should be kept at room temperature and away from sunlight. Some must be
                    refrigerated. Check with your pharmacist or doctor if you aren't sure.</li>
                <li>Make sure all medicines are stored safely and out of the reach of younger brothers or sisters and
                    pets.</li>
                <li>If you have any allergies, tell your doctor and pharmacist before they start you on a new medicine.
                </li>
                <li>If you get a rash, start itching, vomiting, or have trouble breathing after starting a medicine,
                    tell your parents immediately. Breathing difficulty, breaking out in hives, or suddenly developing
                    swelling of the tongue, lips, face, or other body parts may be signs of a severe allergic reaction —
                    get emergency medical care right away.</li>
            </ul>

            <p>Taking medicines may feel like a hassle sometimes. But medicines are the most effective treatments
                available for many illnesses. If you ever have any questions about what a medicine does or how you
                should take it, talk with your doctor or a pharmacist.</p>
        </div>

        <div id="medicine-img"></div>
    </div>

    <Contact />
    <Footer/>
     </>
  )
}