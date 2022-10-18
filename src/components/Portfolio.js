import React from 'react';

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={LookUp}
              alt="lookUp"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={MakeAppoint}
              alt="Make A'Point"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={FinalProject}
              alt="Final Project"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderTwo}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
