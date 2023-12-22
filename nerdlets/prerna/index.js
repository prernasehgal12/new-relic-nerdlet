import React from 'react';
import { App } from './App';
import { BarChart } from 'nr1'
import { HistogramChart } from 'nr1'
import { BillboardChart } from 'nr1'
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class PrernaNerdlet extends React.Component {
  render() {
    return(
      <>
      <App/>
      <BarChart
      accountIds={[4267273]}
      query="SELECT count(*) FROM Public_APICall"
      />
      <HistogramChart
      accountIds={[4267273]}
      query="SELECT histogram(duration, width:10, buckets:20) FROM Public_APICall SINCE 1 month ago"
     />;
     <BillboardChart
      accountIds={[4267273]}
      query="SELECT count(*) FROM Public_APICall SINCE 1 DAY AGO TIMESERIES AUTO FACET jobType"
    />;
      </>
    )
  }
}
