import React from 'react';
import './PreviewCommentCard.css';
import './main.min.css';

export default class PreviewCommentCard extends React.Component {

  render () {
    return (
      <div className="commentcard-container">
        <div className="container">
          <div className="intro-text">
            We are always looking for ways to improve Wendys.com. Please take a minute to tell us what you think and help make Wendy's website experience even better.
          </div>
        </div>
        <div className="container">
          <div id="row-head" className="row">
            <div className="col-sm-6">
              <section className="comment">
                <div className="collection" role="group" aria-labelledby="comment-heading">
                  <h1 id="comment-heading">Comment</h1>
                  <section className="topic-selector" >
                    <div className="form-group">
                      <label className="visually-hidden" htmlFor="comment-select"></label>
                      <select aria-required="false" className="form-control" id="comment-select" name="answer_4339597">
                        <option value="0">Please choose one...</option>
                        <option value="Compliment">Compliment</option>
                        <option value="Search/Navigation">Search/Navigation</option>
                        <option value="Order Issues">Order Issues</option>
                        <option value="Suggestion/Complaint">Suggestion/Complaint</option>
                        <option value="Technical Issues">Technical Issues</option>
                      </select>
                    </div>
                  </section>
                  <div className="form-group">
                    <label className="hidden" htmlFor="comment-textarea">Enter your comments here</label>
                    <textarea className="form-control" id="comment-textarea" name="comments" placeholder="Enter your comments here"></textarea>
                    <p className="help">1000 characters left</p>
                  </div>
                </div>
                <input name="topic_selection" type="hidden" value="4339597" />
              </section>
            </div>
            <div className="col-sm-6">
              <section className="ratings form-group">
                <div className="collection" role="group" aria-labelledby="ratings-heading">
                  <h1 id="ratings-heading">Rating</h1>
                  <section className="required">
                    <fieldset className="rating border-top">
                      <legend className="col-xs-3">
                        Overall<span aria-hidden="true" className="asterisk">*</span>
                      </legend>
                      <div className="col-xs-9">
                        <div id="ratings-anchor-1" className="overall anchor-text"><span className="visually-hidden">− − being </span><span className="pull-left">Not Likely</span><span className="visually-hidden"> and + + being </span><span className="pull-right">Very Likely</span></div>
                        <div className="radiogroup">
                          <div className="cdu-radio"><input id="overall-1" name="overall" type="radio" value="1" aria-required="true" /><label className="radio-label" htmlFor="overall-1"><span className="visually-hidden">1 of 5,</span>− −</label></div>
                          <div className="cdu-radio"><input id="overall-2" name="overall" type="radio" value="2" aria-required="true" /><label className="radio-label" htmlFor="overall-2"><span className="visually-hidden">2 of 5,</span>−</label></div>
                          <div className="cdu-radio"><input id="overall-3" name="overall" type="radio" value="3" aria-required="true" /><label className="radio-label" htmlFor="overall-3"><span className="visually-hidden">3 of 5,</span>+ −</label></div>
                          <div className="cdu-radio"><input id="overall-4" name="overall" type="radio" value="4" aria-required="true" /><label className="radio-label" htmlFor="overall-4"><span className="visually-hidden">4 of 5,</span>+</label></div>
                          <div className="cdu-radio"><input id="overall-5" name="overall" type="radio" value="5" aria-required="true" /><label className="radio-label" htmlFor="overall-5"><span className="visually-hidden">5 of 5,</span>+ +</label></div>
                        </div>
                      </div>
                    </fieldset>
                  </section>
                  <section className="">
                    <fieldset className="rating ">
                      <legend className="col-xs-3">Easy</legend>
                      <div className="col-xs-9">
                        <div id="ratings-anchor-2" className="content anchor-text"><span className="visually-hidden">− − being </span><span className="pull-left">Not Likely</span><span className="visually-hidden"> and + + being </span><span className="pull-right">Very Likely</span></div>
                          <div className="radiogroup">
                          <div className="cdu-radio"><input id="content-1" name="content" type="radio" value="1" aria-required="false" /><label className="radio-label" htmlFor="content-1"><span className="visually-hidden">1 of 5,</span>− −</label></div>
                          <div className="cdu-radio"><input id="content-2" name="content" type="radio" value="2" aria-required="false" /><label className="radio-label" htmlFor="content-2"><span className="visually-hidden">2 of 5,</span>−</label></div>
                          <div className="cdu-radio"><input id="content-3" name="content" type="radio" value="3" aria-required="false" /><label className="radio-label" htmlFor="content-3"><span className="visually-hidden">3 of 5,</span>+ −</label></div>
                          <div className="cdu-radio"><input id="content-4" name="content" type="radio" value="4" aria-required="false" /><label className="radio-label" htmlFor="content-4"><span className="visually-hidden">4 of 5,</span>+</label></div>
                          <div className="cdu-radio"><input id="content-5" name="content" type="radio" value="5" aria-required="false" /><label className="radio-label" htmlFor="content-5"><span className="visually-hidden">5 of 5,</span>+ +</label></div>
                        </div>
                      </div>
                    </fieldset>
                  </section>
                  <section className="">
                    <fieldset className="rating ">
                      <legend className="col-xs-3">Effective</legend>
                        <div className="col-xs-9">
                          <div id="ratings-anchor-3" className="design anchor-text"><span className="visually-hidden">− − being </span><span className="pull-left">Not Likely</span><span className="visually-hidden"> and + + being </span><span className="pull-right">Very Likely</span></div>
                          <div className="radiogroup">
                          <div className="cdu-radio"><input id="design-1" name="design" type="radio" value="1" aria-required="false" /><label className="radio-label" htmlFor="design-1"><span className="visually-hidden">1 of 5,</span>− −</label></div>
                          <div className="cdu-radio"><input id="design-2" name="design" type="radio" value="2" aria-required="false" /><label className="radio-label" htmlFor="design-2"><span className="visually-hidden">2 of 5,</span>−</label></div>
                          <div className="cdu-radio"><input id="design-3" name="design" type="radio" value="3" aria-required="false" /><label className="radio-label" htmlFor="design-3"><span className="visually-hidden">3 of 5,</span>+ −</label></div>
                          <div className="cdu-radio"><input id="design-4" name="design" type="radio" value="4" aria-required="false" /><label className="radio-label" htmlFor="design-4"><span className="visually-hidden">4 of 5,</span>+</label></div>
                          <div className="cdu-radio"><input id="design-5" name="design" type="radio" value="5" aria-required="false" /><label className="radio-label" htmlFor="design-5"><span className="visually-hidden">5 of 5,</span>+ +</label></div>
                        </div>
                      </div>
                    </fieldset>
                  </section>
                  <section className="">
                    <fieldset className="rating ">
                      <legend className="col-xs-3">Enjoyable</legend>
                      <div className="col-xs-9">
                        <div className="radiogroup">
                          <div className="cdu-radio"><input id="usability-1" name="usability" type="radio" value="1" aria-required="false" /><label className="radio-label" htmlFor="usability-1"><span className="visually-hidden">1 of 5,</span>− −</label></div>
                          <div className="cdu-radio"><input id="usability-2" name="usability" type="radio" value="2" aria-required="false" /><label className="radio-label" htmlFor="usability-2"><span className="visually-hidden">2 of 5,</span>−</label></div>
                          <div className="cdu-radio"><input id="usability-3" name="usability" type="radio" value="3" aria-required="false" /><label className="radio-label" htmlFor="usability-3"><span className="visually-hidden">3 of 5,</span>+ −</label></div>
                          <div className="cdu-radio"><input id="usability-4" name="usability" type="radio" value="4" aria-required="false" /><label className="radio-label" htmlFor="usability-4"><span className="visually-hidden">4 of 5,</span>+</label></div>
                          <div className="cdu-radio"><input id="usability-5" name="usability" type="radio" value="5" aria-required="false" /><label className="radio-label" htmlFor="usability-5"><span className="visually-hidden">5 of 5,</span>+ +</label></div>
                        </div>
                      </div>
                    </fieldset>
                  </section>
                  <div id="ratings-anchor-4" className="usability anchor-text" ><span className="visually-hidden">− − being </span><span className="pull-left">Very Poor</span><span className="visually-hidden"> and + + being </span><span className="pull-right">Very Good</span></div>
                </div>
              </section>
            </div>
          </div>
          <div id="row-body" className="row">
            <div className="col-xs-12">
              <p className="customerservice-text">
                Need immediate assistance?  Contact our customer care team via text or call at (888) 624-8140.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}