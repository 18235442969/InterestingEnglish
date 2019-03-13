interface ILocation{
  pathname: string
}

export interface IHistory{
  goBack: Function,
  push: Function,
  location: ILocation
}