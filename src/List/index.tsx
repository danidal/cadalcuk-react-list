import * as React from 'react'
import { Grid } from '@material-ui/core'
import { IItem } from './types'

interface IProps {
  readonly component: React.ComponentType<any> | string;
  readonly items?: IItem[];
  [propName: string]: any;
}

const List = ({ component: Component, items, ...sharedProps }: IProps) => {
  const content = items ? items.map(item => <Component key={item.id} {...sharedProps} {...item} />) : null

  return (
    <Grid container spacing={2}>
      {content}
    </Grid>
  )
}

export default List