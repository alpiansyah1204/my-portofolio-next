import Script from "next/script"
import PageLoader from "../../components/PageLoader"

export default function Home() {
  return (
<>
<PageLoader />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Rizqi Alpiansyah | Developer and Designer</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="main.css" />
  <div id="preloader"></div>

  <div
    style={{ width: "100%", height: "100vh" }}
    className="show d-flex flex-column flex-wrap justify-content-center align-items-center width-50"
  >
    <p className="fs-2 p-2 ">A website to scroll down.</p>
    <img src="image/arrow.svg" className="filter-green" width={50} />
  </div>
  <div className="container-fluid sticky-top">
    <div className="row align-items-start video-container vh-100">
      <div className="container-left col vh-100 d-flex justify-content-center align-items-center frame-container">
        <div className="show1 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-80">
              <div className="d-flex flex-row ">
                <img
                  className="col-3 img-fluid photo-profile rounded"
                  src="image/photo.png"
                />
                <div className="col-8 row justify-content-between m-3">
                  <p className="fs-2 fw-bolder">
                    HI THERE! <br /> 
                    {`I'M RIZQI ALPIANSYAH`}
                  </p>
                  <p className="fs-4 indogo"> A DEVELOPER AND DESIGNER</p>
                  <a href="Resume Rizqi Alpiansyah.pdf" download="">
                    <button
                      className="btn btn-light"
                      style={{ border: "2px solid #000", margin: 0 }}
                    >
                      <p className="m-0"> Download Resume</p>
                    </button>
                  </a>
                </div>
              </div>
              <p className="mt-3">
                I recently completed my undergraduate studies at Telkom
                University with a major in computer engineering. I became
                interested in machine learning, data analysis, Android app
                development, and 3D design during my academic career. I am
                excited to start a career in this field and continue to learn
                and contribute to the development of innovative technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="show2 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-60">
              <p className="fs-3 mb-3 indogo">My activities while on campus</p>
              <div className="mt-1 ">
                <div className="d-flex flex-row flex-wrap">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/taekwondo.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Taekwondo Telkom University
                    </p>
                    <p className=" me-4 timeline">Jan 2020 - Des 2021</p>
                    <p>
                      {" "}
                      I joined the Taekwondo student activity unit where when I
                      was in my first year of college I served as Binpres. Then
                      in my second year I was given the trust to become Deputy
                      Chairperson of the student activities unit Taekwondo for
                      2021-2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-1 ">
                <div className="d-flex flex-row flex-wrap">
                  <div className="col-2 pe-2 pt-2 ">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/ismile.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">I-Smile Lab</p>
                    <p className="  timeline">Des 2020 - Agu 2023</p>
                    <p>
                      {" "}
                      then after that I joined the ismle lab as a research
                      assistant in my second year until I graduated. in the lab
                      We create research, compete in various data science
                      competitions also share knowledge about data science,
                      machine learning, and artificial intelligence within the
                      scope of electrical and computer engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show3 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-60">
              <p className="fs-3 mb-3 indogo">
                I also took some training when I was in college.
              </p>
              <div className="mt-2  ">
                {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/bangkit.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Google Bangkit 2021 Mobile Developer Graduated
                    </p>
                    <p className="mt-1 m-0">
                      Bangkit Academy led by Google, Tokopedia, Gojek, &amp;
                      Traveloka
                    </p>
                    <p className=" m-0  timeline">Jan 2020 - Des 2021</p>
                  </div>
                </div>
              </div>
              <div className="mt-2  ">
                {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/dicoding.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Baparekraf Digital Talent Data Analytics
                    </p>
                    <p className="mt-1 m-0">Dicoding Indonesia &amp; Google</p>
                    <p className=" m-0  timeline">Oct 2022 - Dec 2022</p>
                  </div>
                </div>
              </div>
              <div className="mt-2  ">
                {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/bdd.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Baparekraf Digital Talent Data Analitik
                    </p>
                    <p className="mt-1 m-0">Dicoding Indonesia, Google</p>
                    <p className=" m-0  timeline">Aug 2022 - Dec 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show4 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-60">
              <p className="fs-3 mb-3 indogo">
                I also took some training when I was in college.
              </p>
              <div className="mt-2  ">
                {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/coursera.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Desain UX Google Specialization
                    </p>
                    <p className="mt-1 m-0">Google</p>
                    <p className=" m-0  timeline">Mar 2023</p>
                  </div>
                </div>
              </div>
              <div className="mt-2  ">
                {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/coursera.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">IT Support Google</p>
                    <p className="mt-1 m-0"> Google</p>
                    <p className=" m-0  timeline">Aug 2023 </p>
                  </div>
                </div>
              </div>
              <div className="mt-2  ">
                {/* data-bs-toggle="modal" data-bs-target="#staticBackdrop" */}
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/dicoding.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Menjadi Android Developer Expert
                    </p>
                    <p className="mt-1 m-0">Dicoding Indonesia</p>
                    <p className=" m-0  timeline">Sep 2022 - Sep 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show5 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-60">
              <p className="fs-3 mb-3 indogo"> Some of my experiences.</p>
              <div className="mt-2  ">
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/puti.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Frontend Developer Direktorat Pusat Teknologi Informasi
                      (PUTI)
                    </p>
                    <p className="mt-1 m-0">Telkom University · Internship</p>
                    <p className=" m-0  timeline">Sep 2022 - Jan 2023</p>
                  </div>
                  <div>
                    <p className="mt-1 m-0">Jobdesk :</p>
                    <ul className="m-0">
                      <li>
                        <p className="m-0">
                          {" "}
                          the business processes submitted by SA&amp;TW.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Designing application interfaces for related business
                          processes.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Create application templates from standardized
                          business processes.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Perform interface integration with related APIs.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Build interfaces for application deployment.{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-2  ">
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/hypernet.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">
                      Network Operations Center{" "}
                    </p>
                    <p className="mt-1 m-0">
                      Hypernet Technologies · Internship
                    </p>
                    <p className=" m-0  timeline">Oct 2017 - Dec 2017</p>
                  </div>
                  <div>
                    <p className="mt-1 m-0">Jobdesk :</p>
                    <ul className="m-0">
                      <li>
                        <p className="m-0">
                          Establish and keep up ISP network infrastructure.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          keeping track of and debugging network systems at the
                          user level.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">Effective communicator</p>
                      </li>
                      <li>
                        <p className="m-0">
                          Be familiar with the fundamentals of networking.
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Ready to offer assistance on the ground if required
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show6 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-60">
              <p className="fs-3 mb-3 indogo"> some of my experiences.</p>
              <div className="mt-2  ">
                <div className="d-flex flex-row flex-wrap p-2 card">
                  <div className="col-2 pe-2 pt-2">
                    <img
                      className=" img-fluid list-photo rounded"
                      src="image/hypernet.png"
                    />
                  </div>
                  <div className="col-10  justify-content-end align-items-end ">
                    <p className="mt-1 fs-6 fw-medium m-0">Network Engineer </p>
                    <p className="mt-1 m-0">
                      Hypernet Technologies · Internship
                    </p>
                    <p className=" m-0  timeline">Jul 2017 - Sep 2017</p>
                  </div>
                  <div>
                    <p className="mt-1 m-0">Jobdesk :</p>
                    <ul className="m-0">
                      <li>
                        <p className="m-0">creating useful networks </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Install and configure software, servers, routers, and
                          other network equipment.{" "}
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Planning and network topology, including routing,
                          assigning IP addresses to VLANs, and other issues{" "}
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Create a network that is effective and safe.{" "}
                        </p>
                      </li>
                      <li>
                        <p className="m-0">
                          Implement network security measures, such as the
                          creation of firewall rules to restrict access
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="show7 fill ">
          <div className="fill d-flex  align-items-center justify-content-center">
            <div className="width-60">
              <p className="fs-3 m-0 indogo"> Get in Touch</p>
              <p className="fs-5 mb-3 ">
                For Hiring, Business, or Collaboration please contact me via
                email or other social media bellows.
              </p>
              <div className="mt-2  ">
                <a
                  href="https://www.linkedin.com/in/rizqialpiansyah"
                  target="_blank"
                  className="m-0 p-0"
                >
                  {/* <a href="https://www.linkedin.com/in/rizqialpiansyah/"> */}
                  <div className="d-flex flex-row flex-wrap p-2 card justify-content-start align-items-center">
                    <div className="col-1 d-flex justify-content-center align-items-center ms-1">
                      <div className="image-container">
                        <img
                          className="img-fluid list-photo rounded"
                          src="image/linkedin.png"
                        />
                      </div>
                    </div>
                    <div className="col-11 d-flex row justify-content-center ms-2">
                      <p className="m-0 fs-5 fw-medium">Linkedin</p>
                      <p className="m-0">
                        {" "}
                        https://www.linkedin.com/in/rizqialpiansyah/
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-2  ">
                <a
                  href="mailto:rizqialpiansyah12@gmail.com"
                  target="_blank"
                  className="m-0 p-0"
                >
                  {/* <a href="https://www.linkedin.com/in/rizqialpiansyah/"> */}
                  <div className="d-flex flex-row flex-wrap p-2 card justify-content-start align-items-center">
                    <div className="col-1 d-flex justify-content-center align-items-center ms-1">
                      <div className="image-container">
                        <img
                          className="img-fluid list-photo rounded"
                          src="image/email.png"
                        />
                      </div>
                    </div>
                    <div className="col-11 d-flex row justify-content-center ms-2">
                      <p className="m-0 fs-5 fw-medium">Email</p>
                      <p className="m-0">rizqialpiansyah12@Gmail.com</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-2  ">
                <a
                  href="https://github.com/alpiansyah1204/"
                  target="_blank"
                  className="m-0 p-0"
                >
                  {/* <a href="https://www.linkedin.com/in/rizqialpiansyah/"> */}
                  <div className="d-flex flex-row flex-wrap p-2 card justify-content-start align-items-center">
                    <div className="col-1 d-flex justify-content-center align-items-center ms-1">
                      <div className="image-container">
                        <img
                          className="img-fluid list-photo rounded"
                          src="image/github.png"
                        />
                      </div>
                    </div>
                    <div className="col-11 d-flex row justify-content-center ms-2">
                      <p className="m-0 fs-5 fw-medium">github</p>
                      <p className="m-0">https://github.com/alpiansyah1204/</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-2  ">
                <a
                  href="https://api.whatsapp.com/send?phone=6285220880872"
                  target="_blank"
                  className="m-0 p-0"
                >
                  {/* <a href="https://www.linkedin.com/in/rizqialpiansyah/"> */}
                  <div className="d-flex flex-row flex-wrap p-2 card justify-content-start align-items-center">
                    <div className="col-1 d-flex justify-content-center align-items-center ms-1">
                      <div className="image-container">
                        <img
                          className="img-fluid list-photo rounded"
                          src="image/whatsapp.png"
                        />
                      </div>
                    </div>
                    <div className="col-11 d-flex row justify-content-center ms-2">
                      <p className="m-0 fs-5 fw-medium">whatsapp</p>
                      <p className="m-0">
                        https://api.whatsapp.com/send?phone=6285220880872
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-right  col vh-100 d-flex justify-content-center align-items-center video-overlay">
        <video id="v0" tabIndex={0} autobuffer="" preload="">
          <source type="video/mp4" src="myvideo.mkv" />
        </video>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    style={{ zIndex: 1050 }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">
            Google Bangkit 2021 Mobile Developer Graduated
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="set-height" />
  <div id="pdf-container1" />
  <Script src="/sticky.js"></Script>
    <Script src="/video.js"></Script>
    <Script id="popper" src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </Script>
    <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous">
    </Script>
</>

  )
}
