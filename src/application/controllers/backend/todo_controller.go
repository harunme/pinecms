package backend
import (
	"github.com/xiusin/pinecms/src/application/models/tables"
)

type TodoController struct {
	BaseController
}

func (c *TodoController) Construct() {
	c.Group = "Todo管理"
  	c.ApiEntityName = "Todo"

	c.Table = &tables.Todo{}
	c.Entries = &[]tables.Todo{}
}