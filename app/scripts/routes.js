import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import {
  isAdmin,
  isAuthenticated,
  isParticipant,
  shouldNotBeAuthenticated,
} from './auth'

import {
  Admin,
  Calendar,
  EventsEdit,
  EventsNew,
  EventsShow,
  ForgotPassword,
  Home,
  ItemsEdit,
  ItemsIndex,
  ItemsNew,
  Login,
  NotFound,
  Page,
  PerformersEdit,
  PerformersIndex,
  PerformersNew,
  PlacesEdit,
  PlacesIndex,
  PlacesNew,
  PlacesShow,
  Profile,
  Register,
  ResetPassword,
  Tickets,
} from './views'

export default class Routes extends Component {
  render() {
    return (
      <main role="main">
        <Switch>
          <Route component={Home} exact={true} path="/" />
          <Route component={shouldNotBeAuthenticated(Login)} path="/login" />
          <Route component={shouldNotBeAuthenticated(Register)} path="/register" />
          <Route component={shouldNotBeAuthenticated(Tickets)} path="/tickets" />
          <Route component={shouldNotBeAuthenticated(ForgotPassword)} path="/forgot" />
          <Route component={shouldNotBeAuthenticated(ResetPassword)} path="/reset/:token" />
          <Route component={Page} path="/pages/:slug" />
          <Route component={Calendar} path="/calendar" />
          <Route component={isAuthenticated(Profile)} path="/profile" />
          <Route component={isParticipant(PlacesNew)} path="/new/place" />
          <Route component={isParticipant(ItemsNew)} path="/new/item" />
          <Route component={isParticipant(EventsNew)} path="/new/event" />
          <Route component={isParticipant(PerformersNew)} path="/new/performer" />
          <Route component={isParticipant(EventsEdit)} path="/events/:slug/edit" />
          <Route component={isParticipant(EventsShow)} path="/events/:slug" />
          <Route component={isParticipant(PlacesEdit)} path="/places/:slug/edit" />
          <Route component={isParticipant(PlacesShow)} path="/places/:slug" />
          <Route component={isParticipant(PlacesIndex)} path="/places" />
          <Route component={isParticipant(ItemsEdit)} path="/items/:slug/edit" />
          <Route component={isParticipant(ItemsIndex)} path="/items" />
          <Route component={isParticipant(PerformersEdit)} path="/performers/:slug/edit" />
          <Route component={isParticipant(PerformersIndex)} path="/performers" />
          <Route component={isAdmin(Admin)} path="/admin" />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}
