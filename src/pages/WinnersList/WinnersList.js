import React from 'react';
import classNames from 'classnames';
import './WinnersList.css';

const WinnersList = () => {
  return (
    <section className={classNames('winners-list')}>
      <h2 className={classNames('winners-list__heading')}>
        Here is how you can check the list of Nifty10 winners on the app directly:
      </h2>
      <ol className={classNames('winners-list__steps')}>
        <li className={classNames('winners-list__item')}>
          <p><strong>Download the app: </strong>Go to your app store (Google Play Store or Apple App Store) and download the app onto your device.</p>
        </li>
        <li className={classNames('winners-list__item')}>
          <p><strong>Sign Up & Login to your account:</strong> Open the app and follow the sign-up or login prompts to create your account or log into your existing account.</p>
        </li>
        <li className={classNames('winners-list__item')}>
          <p><strong>Navigate to the 'Winners' section:</strong></p>
          <p>Look for a tab or menu option at the bottom of the app interface.</p>
          <p>Find and click on the tab labeled 'Winners'. This might be located in a navigation bar or menu depending on the app's design.</p>
        </li>
        <li className={classNames('winners-list__item')}>
          <p><strong>Filter by pool and view contest winners:</strong></p>
          <p>Once you're on the 'Winners' page, there should be options to filter the winners by different contest pools or categories.</p>
          <p>Select the pool or category you're interested in (if applicable). Browse through the list or details provided to view the contest winners.</p>
        </li>
      </ol>

      <br />

      <h2 className={classNames('winners-list__heading')}>
        What can you check on the app additionally?
      </h2>
      <ol className={classNames('winners-list__additional')}>
        <li className={classNames('winners-list__additional-item')}>
          Pool-wise winners. E.g. you can check who won Nifty10’s pool contest.
        </li>
        <li className={classNames('winners-list__additional-item')}>
          Yes, you can even check the winner list by past games and not just the winners who won today or yesterday.
        </li>
        <li className={classNames('winners-list__additional-item')}>
          You can filter by Pool wise contests and you’ll be able to see who all were the contest winners.
        </li>
        <li className={classNames('winners-list__additional-item')}>
          Check the Rs. 29 or Rs. 69 or Rs. 99 or Rs. 129 Pool's first prize winners.
        </li>
        <li className={classNames('winners-list__additional-item')}>
          Moreover, you can even see the fantasy stock points and also the first prize winners.
        </li>
      </ol>
    </section>
  );
};

export default WinnersList;
